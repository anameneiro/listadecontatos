import { useDispatch } from 'react-redux'
import { SetStateAction, useEffect, useState } from 'react'
import contato from '../../images/user-fill.svg'
import lixeira from '../../images/delete-bin-2-line.svg'
import lapis from '../../images/settings-3-fill.svg'
import salvar from '../../images/check-line.svg'
import cancelar from '../../images/close-fill.svg'
import * as Style from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  id,
  name: nameOriginal,
  email: emailOriginal,
  tell: tellOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState(0)
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nameOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      tellOriginal > 0
    ) {
      setName(nameOriginal)
      setEmail(emailOriginal)
      setTell(tellOriginal)
    }
  }, [nameOriginal, emailOriginal, tellOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setName(nameOriginal)
    setTell(tellOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <Style.CardContato>
        <Style.ContainerStatus>
          <img src={contato} alt="Contato" />
          <ul>
            <Style.Descricao
              disabled={!estaEditando}
              value={name}
              onChange={(event: {
                target: { value: SetStateAction<string> }
              }) => setName(event.target.value)}
            />
            <Style.Descricao
              disabled={!estaEditando}
              value={tell === 0 ? '' : tell.toString()}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                const inputValue = event.target.value
                const numericValue = parseInt(inputValue, 10)

                if (!isNaN(numericValue)) {
                  setTell(numericValue)
                } else if (inputValue === '') {
                  setTell(0)
                }
              }}
            />
            <Style.Descricao
              disabled={!estaEditando}
              value={email}
              onChange={(event: {
                target: { value: SetStateAction<string> }
              }) => setEmail(event.target.value)}
            />
          </ul>
        </Style.ContainerStatus>
        <Style.ContainerButtons>
          {estaEditando ? (
            <>
              <Style.BotaoSalvar
                onClick={() => {
                  dispatch(editar({ name, tell, email, id }))
                  setEstaEditando(false)
                }}
              >
                <img src={salvar} alt="Salvar Edição" />
              </Style.BotaoSalvar>
              <Style.BotaoCancelarEDeletar onClick={cancelarEdicao}>
                <img src={cancelar} alt="Cancelar Edição" />
              </Style.BotaoCancelarEDeletar>
            </>
          ) : (
            <>
              <Style.BotaoEditar onClick={() => setEstaEditando(true)}>
                <img src={lapis} alt="Editar Contato" />
              </Style.BotaoEditar>
              <Style.BotaoCancelarEDeletar
                onClick={() => dispatch(remover(id))}
              >
                <img src={lixeira} alt="Deletar Contato" />
              </Style.BotaoCancelarEDeletar>
            </>
          )}
        </Style.ContainerButtons>
      </Style.CardContato>
    </>
  )
}

export default Contato
