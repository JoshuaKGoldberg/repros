import {table} from 'console-table-without-index';
import {expect} from 'expect';
import {JSDOM} from 'jsdom';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

const dom = new JSDOM(`
  <div role="meter"       aria-label="Disk"           aria-valuenow="120"></div>
  <div role="progressbar" aria-label="Upload"         aria-valuenow="120"></div>
  <div role="scrollbar"   aria-label="Scroll"         aria-valuenow="120" aria-controls="panel" tabindex="0"></div>
  <div role="separator"   aria-label="Resize panels"  aria-valuenow="120" tabindex="0"></div>
  <div role="slider"      aria-label="Volume"         aria-valuenow="120" tabindex="0"></div>
  <div role="spinbutton"  aria-label="Quantity"       aria-valuenow="120" tabindex="0"></div>
`);

function check(role) {
  const element = dom.window.document.querySelector(`[role="${role}"]`);

  let toHaveValue;
  try {
    expect(element).toHaveValue(120);
    toHaveValue = '✅ passes';
  } catch {
    toHaveValue = '❌ FAILS';
  }

  return {
    role,
    "el.getAttribute('aria-valuenow')": element.getAttribute('aria-valuenow'),
    'el.ariaValueNow': element.ariaValueNow,
    'toHaveValue(120)': toHaveValue,
  };
}

console.log(
  table(
    [
      'meter',
      'progressbar',
      'scrollbar',
      'separator',
      'slider',
      'spinbutton',
    ].map(check)
  )
);
