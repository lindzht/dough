import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalComponent ({handleDeleteCategorySubmit}) {
  const [open, setOpen] = React.useState(false)

  const handleDeleteAndClose = () => {
    handleDeleteCategorySubmit();
    setOpen(false)
  };

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button><Icon name='trash alternate' /></Button>}
    >
      <Header icon>
        <Icon name='trash alternate' />
        Are You Sure You Wanna Delete This Category?
      </Header>
      <Modal.Content>
        <p>
          Deleting a category will ALSO delete all of your associated expenses. Plz make sure you wanna delete this first. KK THNX!
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={handleDeleteAndClose}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalComponent