import { styled } from '../../theme';

export const StyledTabWrapper = styled('div', {
  width: 540,
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
});

export const StyledTabList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  borderBottom: '2px solid $secondary',
});

export const StyledButton = styled('button', {
  padding: '8px 12px',
  flex: 1,
  backgroundColor: 'White',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: '$montserrat',
});

export const StyledButtonIndicator = styled('span', {
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,
  position: 'absolute',
  bottom: 0,
  right: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '50%',
  transition: 'background-color, height 300ms',
  height: 0,
  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
        height: 4,
      },
    },
  },
});

export const StyledPannels = styled('div', {
  position: 'relative',
  marginTop: 18,
});

export const StyledContent = styled('div', {
  position: 'absolute',
  width: '100%',
  inset: 0,
  visibility: 'hidden',
  opacity: 0,
  zIndex: -1,
  transition: 'visibility, opacity 500ms',
  variants: {
    active: {
      true: {
        opacity: 1,
        visibility: 'visible',
        zIndex: 2,
      },
    },
  },
});
