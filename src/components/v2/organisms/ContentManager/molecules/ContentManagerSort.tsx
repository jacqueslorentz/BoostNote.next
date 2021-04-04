import React from 'react'
import FormSelect, {
  FormSelectOption,
} from '../../../molecules/Form/atoms/FormSelect'
import styled from '../../../../../lib/v2/styled'
import Flexbox from '../../../atoms/Flexbox'
import Icon from '../../../atoms/Icon'
import {
  mdiSortAlphabeticalAscending,
  mdiSortAlphabeticalDescending,
  mdiSortClockAscending,
} from '@mdi/js'
import cc from 'classcat'

export const contentManagerSortOptions: FormSelectOption[] = [
  {
    label: (
      <Flexbox>
        <Icon path={mdiSortClockAscending} size={22} />{' '}
        <span className='label'>Latest Updated</span>
      </Flexbox>
    ),
    value: 'Latest Updated',
  },
  {
    label: (
      <Flexbox>
        <Icon path={mdiSortAlphabeticalAscending} size={22} />{' '}
        <span className='label'>Title A-Z</span>
      </Flexbox>
    ),
    value: 'Title A-Z',
  },
  {
    label: (
      <Flexbox>
        <Icon path={mdiSortAlphabeticalDescending} size={22} />{' '}
        <span className='label'>Title Z-A</span>
      </Flexbox>
    ),
    value: 'Title Z-A',
  },
]

interface ContentManagerSortProps {
  value: typeof contentManagerSortOptions[number]['value']
  onChange: (value: FormSelectOption) => void
  className?: string
}

const ContentManagerSort = ({
  className,
  value,
  onChange,
}: ContentManagerSortProps) => {
  return (
    <StyledSortingOption className={cc(['content__manager__sort', className])}>
      <FormSelect
        options={contentManagerSortOptions}
        value={contentManagerSortOptions.find((ORDER) => ORDER.value === value)}
        onChange={onChange}
        className='form__select'
        isSearchable={false}
        isMulti={false}
      />
    </StyledSortingOption>
  )
}

const StyledSortingOption = styled.div`
  .form__select {
    font-size: ${({ theme }) => theme.sizes.fonts.sm}px;
    width: 50px;

    .form__select__control {
      height: auto !important;
      border: none !important;
    }
    .form__select__indicators,
    .form__select__single-value .label {
      display: none;
    }
  }

  &:hover .form__select .form__select__single-value {
    color: ${({ theme }) => theme.colors.text.main};
  }

  .form__select__menu {
    right: 10px;
    width: 180px;
  }
`

export default ContentManagerSort
