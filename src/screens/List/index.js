import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Loader, ListRender, Button, Modal, Title } from 'components'
import {
  ListScreenContainer,
  ContentContainer,
  HeaderContainer,
  TitleContainer,
  LogoImage,
  HeaderButtonContainer,
  MobileHeaderButtonContainer,
  ListContainer
} from './styles'
import { SAVE_USERNAME_PATH } from 'services/constants'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectItem, setSelectItem] = useState(null)
  const username = localStorage.getItem(SAVE_USERNAME_PATH)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList(username)
    setListData(result)
    setLoading(false)
  }

  useEffect(() => {
    loadListItems(username)
  }, [username])

  const onClickAddButton = () => {
    setSelectItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectItem(null)
  }

  const onEditItem = (item) => {
    setSelectItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      ...item,
      checked: !item.checked
    })

    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <ListScreenContainer>
      <ContentContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage />
            <Title fontSizeList={32} ml={12} pd={10}>
              Lista de Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </HeaderButtonContainer>
          <MobileHeaderButtonContainer>
            <Button onClick={onClickAddButton}>+</Button>
          </MobileHeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectItem} onClose={onCloseModal} />}
    </ListScreenContainer>
  )
}
