import { useColorMode } from 'theme-ui';
import { Button, Icon } from '@reflexjs/ui';

export default function ModeToggle({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      className="mode-toggle"
      aria-label="Toggle mode"
      variant="icon"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
      ml={[2, 4]}
      hoverColor="primary"
      focusColor="text"
      {...props}
    >
      <Icon name={colorMode === 'default' ? 'sun' : 'moon'} size="5" />
    </Button>
  );
}
