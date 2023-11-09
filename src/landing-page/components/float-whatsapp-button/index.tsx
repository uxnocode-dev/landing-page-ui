import React, { useEffect, useState } from 'react'
import Styles from './styles'
import { FaWhatsapp } from 'react-icons/fa'
import { HUNTERS_DATA } from '@/landing-page/data/hunters.data'
import { IHunterDataItem } from '@/interfaces/hunter.interface'
import { WhatsAppService } from '@/services/common/whatsapp.service'

const whatsAppService = new WhatsAppService()

const FloatWhatsappButton: React.FC = () => {
    const [currentHunter, setCurrentHunter] = useState<
        IHunterDataItem | undefined
    >(undefined)

    const sendMessage = () => {
        if (!currentHunter) return

        const msg = `Olá, vim através do site e tenho interesse em falar sobre meu negócio.`
        whatsAppService.sendMessage(currentHunter?.whatsAppNumber, msg)
    }

    const initWidget = () => {
        const randomIndex = Math.floor(Math.random() * HUNTERS_DATA.length)
        setCurrentHunter(HUNTERS_DATA[randomIndex])
    }

    useEffect(() => {
        initWidget()
    }, [])

    if (!currentHunter) return <></>

    return (
        <Styles.Wrapper>
            <Styles.MessageContainer>
                <Styles.Icon>
                    <FaWhatsapp />
                </Styles.Icon>

                <Styles.Section>
                    <Styles.Title>
                        Vamos conversar no{' '}
                        <Styles.ColoredTitle>Whatsapp</Styles.ColoredTitle>?
                    </Styles.Title>

                    <Styles.Text>
                        Meu nome é{' '}
                        <Styles.ColoredText>
                            {currentHunter?.name.split(' ')[0]}
                        </Styles.ColoredText>{' '}
                        e te espero lá!
                    </Styles.Text>
                </Styles.Section>
            </Styles.MessageContainer>

            <Styles.Button
                onClick={sendMessage}
                imageBg={currentHunter?.image || ''}
            >
                <Styles.FloatIcon>
                    <FaWhatsapp />
                </Styles.FloatIcon>
            </Styles.Button>
        </Styles.Wrapper>
    )
}

export default FloatWhatsappButton
