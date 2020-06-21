import {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
  FlexFlowProperty,
} from 'csstype'
import type { DivProps } from '../index'
export interface FlexProps extends DivProps {
  inline?: boolean
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  flexDirection?: FlexDirectionProperty
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  flexWrap?: FlexWrapProperty
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  justifyContent?: JustifyContentProperty
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  alignItems?: AlignItemsProperty
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceBetween?: boolean
  alignContentSpaceAround?: boolean
  alignContentStretch?: boolean
  alignContent?: AlignContentProperty
  flow?: FlexFlowProperty
}
