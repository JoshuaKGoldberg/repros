import {toHaveValue} from '@testing-library/jest-dom/matchers';

const context = {isNot: false, utils: {}};

function check(role) {
  const element = document.querySelector(`[role="${role}"]`);

  return {
    role,
    "el.getAttribute('aria-valuenow')": element.getAttribute('aria-valuenow'),
    'el.ariaValueNow': element.ariaValueNow,
    'toHaveValue(120)': toHaveValue.call(context, element, 120).pass
      ? '✅ passes'
      : '❌ FAILS',
  };
}

const rows = [
  'meter',
  'progressbar',
  'scrollbar',
  'separator',
  'slider',
  'spinbutton',
].map(check);

const columns = Object.keys(rows[0]);
const cell = (row, column) =>
  `<td${row[column] === '❌ FAILS' ? ' class="fails"' : ''}>${row[column]}</td>`;

document.getElementById('results').innerHTML = `
  <p><code>${navigator.userAgent}</code></p>
  <table>
    <thead>
      <tr>${columns.map((column) => `<th>${column}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) =>
            `<tr>${columns.map((column) => cell(row, column)).join('')}</tr>`
        )
        .join('')}
    </tbody>
  </table>
`;
