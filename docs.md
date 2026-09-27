# Docs

```jsx
<SkipNavLink contentId="main-content" />
{/* ... */}
<SkipNavContent id="main-content" />
```

```jsx
<PickerInline
  apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
  onSuccess={onFileUpload}
>
  <div style={{ display: url ? 'none' : 'block', height: '500px' }}></div>
</PickerInline>

{url && <img src={url} style={{ marginTop: '2rem' }} />}
```
