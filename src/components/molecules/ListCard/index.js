import {
  ListCardContainer,
  CheckImage,
  TextContainer,
  ArrowButton,
  ArrowIcon
} from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <ListCardContainer>
      <CheckImage
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <TextContainer>
        <SmallText fontSizeTitle={16} mb={4}>
          {item?.name}
        </SmallText>
        <SmallText fontSizeSubtitle={14}>{item?.quantity} unidades</SmallText>
      </TextContainer>
      <ArrowButton onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowButton>
    </ListCardContainer>
  )
}
