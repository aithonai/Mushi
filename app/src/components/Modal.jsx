import { useEffect } from "react"
import { UilMultiply } from '@iconscout/react-unicons'
import { 
	ModalContainer, 
	Content, 
	Header, 
	Body, 
	Title,
	CloseButton, 
} from "./ModalStyles"

export default function Modal (props) {
	const handleModalClose = (e) => e.stopPropagation()
	const preventPageScroll = () => {
		props.isOpen 
		? document.body.style.overflow = 'hidden'
		: document.body.style.overflow = 'unset'
	}
	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) props.closeModal() 
	}

	useEffect(preventPageScroll, [props.isOpen])
	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	})

	return (
		<ModalContainer isOpen={props.isOpen} onClick={props.closeModal}>
			<Content onClick={handleModalClose}>
				<Header>
					{props.title && <Title title={props.title}>{props.title}</Title>}
					<CloseButton onClick={props.closeModal}>
						<UilMultiply />
					</CloseButton>
				</Header>
				<Body>
					{props.children}
				</Body>
			</Content>
		</ModalContainer>
	)
}
