import React, {
  DragEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from 'react'
import styled from '../../../lib/v2/styled'
import cc from 'classcat'

interface HyperLinkProps {
  id?: string
  href: string
  className?: string
  onContextMenu?: MouseEventHandler
  onFocus?: FocusEventHandler
  draggable?: boolean
  onDragStart?: DragEventHandler
  onDrop?: DragEventHandler
  onDragOver?: DragEventHandler
  onClick?: MouseEventHandler
}

export const ExternalLink: React.FC<HyperLinkProps> = ({
  className,
  children,
  ...props
}) => (
  <Container
    className={cc(['link', className])}
    rel='noopener noreferrer'
    target='_blank'
    {...props}
  >
    {children}
  </Container>
)

const Link: React.FC<HyperLinkProps & { onClick: MouseEventHandler }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Container className={cc(['link', className])} {...props}>
      {children}
    </Container>
  )
}

export default Link

const Container = styled.a`
  display: inline;
  transition: 200ms color;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.link}
  padding: 0 ${({ theme }) => theme.sizes.spaces.sm}px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    opacity: 0.8;
  }
`
