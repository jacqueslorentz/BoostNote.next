import React, { useState } from 'react'
import styled from '../../../../../lib/v2/styled'
import { AppComponent } from '../../../../../lib/v2/types'
import cc from 'classcat'
import { overflowEllipsis } from '../../../../../lib/v2/styled/styleFunctions'
import Button from '../../../atoms/Button'
import { mdiChevronDown, mdiChevronRight } from '@mdi/js'
import { Emoji } from 'emoji-mart'
import Icon from '../../../atoms/Icon'
import FoldingWrapper, { FoldingProps } from '../../../atoms/FoldingWrapper'

interface SidebarSearchItemProps {
  defaultIcon?: string
  depth?: number
  emoji?: string
  folded?: boolean
  folding?: FoldingProps
  id?: string
  label: string
  labelHref?: string
  highlighted?: string
  contexts?: string[]
  labelClick?: () => void
}

interface SharedProps {
  focused: boolean
  setFocused: React.Dispatch<boolean>
}

const SearchItem: AppComponent<SidebarSearchItemProps & SharedProps> = ({
  className,
  depth = 0,
  defaultIcon,
  emoji,
  focused,
  folding,
  folded,
  id,
  label,
  labelHref,
  labelClick,
  setFocused,
}) => {
  const LabelTag = labelHref != null ? 'a' : 'button'
  const unfocusOnBlur = (event: any) => {
    if (
      document.activeElement == null ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setFocused(false)
    }
  }

  return (
    <Container
      depth={depth}
      className={cc([className, 'sidebar__search__item', focused && 'focused'])}
      onBlur={unfocusOnBlur}
    >
      <div className='sidebar__search__item__wrapper'>
        {folded != null && (
          <Button
            variant='icon'
            iconSize={16}
            iconPath={folded ? mdiChevronRight : mdiChevronDown}
            className='sidebar__search__item__icon'
            size='sm'
            onClick={folding?.toggle}
          />
        )}
        <LabelTag
          className='sidebar__search__item__label'
          onFocus={() => setFocused(true)}
          onClick={labelClick}
          href={labelHref}
          id={`search-${id}`}
          tabIndex={1}
        >
          {emoji != null ? (
            <Emoji emoji={emoji} set='apple' size={16} />
          ) : defaultIcon != null ? (
            <Icon path={defaultIcon} size={16} />
          ) : null}
          <span className='sidebar__search__item__label__ellipsis'>
            {label}
          </span>
        </LabelTag>
      </div>
    </Container>
  )
}

const Container = styled.div<{ depth: number }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.sizes.fonts.df}px;
  border-radius: ${({ theme }) => theme.borders.radius}px;
  &:focus,
  &.focused {
    background-color: ${({ theme }) =>
      theme.colors.background.gradients.second};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.gradients.first};
  }

  .sidebar__search__item__wrapper {
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding-left: ${({ depth }) => 26 + (depth as number) * 20}px;
  }

  a[href].sidebar__search__item__label {
    cursor: pointer;
  }

  .sidebar__search__item__label {
    font-size: ${({ theme }) => theme.sizes.fonts.df}px;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    background: none;
    outline: 0;
    border: 0;
    text-align: left;
    color: ${({ theme }) => theme.colors.text.main};
    padding: ${({ theme }) => theme.sizes.spaces.xsm}px 0;
    text-decoration: none;
    margin: 0;
    overflow: hidden;
    svg {
      color: ${({ theme }) => theme.colors.text.link};
    }
    .sidebar__search__item__label__ellipsis {
      padding-left: ${({ theme }) => theme.sizes.spaces.xsm}px;
      ${overflowEllipsis};
    }
  }

  .sidebar__search__item__icon {
    flex: 0 0 auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
const SidebarSearchItem: AppComponent<SidebarSearchItemProps> = ({
  folding,
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  if (folding != null) {
    return (
      <FoldingWrapper
        fold={folding.fold}
        unfold={folding.unfold}
        focused={focused}
      >
        <SearchItem
          focused={focused}
          setFocused={setFocused}
          folding={folding}
          {...props}
        />
      </FoldingWrapper>
    )
  }
  return (
    <SearchItem
      focused={focused}
      setFocused={setFocused}
      folding={folding}
      {...props}
    />
  )
}

export default SidebarSearchItem
