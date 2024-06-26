import { ListCard } from 'components/molecules'
import { Subtitle } from 'components/atoms'
import {
  ListRenderContainer,
  InfoListItems,
  MobileInfoListItems
} from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <>
        <InfoListItems>
          <Subtitle>
            Sua lista está vazia, adicione um novo item clicando no botão de
            'Adicionar'.
          </Subtitle>
        </InfoListItems>
        <MobileInfoListItems>
          <Subtitle>
            Sua lista está vazia, adicione um novo item clicando no botão de
            '+'.
          </Subtitle>
        </MobileInfoListItems>
      </>
    )
  }

  return (
    <ListRenderContainer>
      {[...list].reverse().map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          outline={item?.checked}
          key={item?._id}
          item={item}
        />
      ))}
    </ListRenderContainer>
  )
}
