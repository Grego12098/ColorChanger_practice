export default function ColorScheme({onThemeChange}) {
  return (
    <div className="flex justify-center color text-skin-muted">
    <button onClick={() => onThemeChange('')}>Default</button>
    <button className="m-4" onClick={() => onThemeChange('theme-beach')}>Beach</button>
    <button onClick={() => onThemeChange('theme-space')}>Space</button>
    </div>
    )
}