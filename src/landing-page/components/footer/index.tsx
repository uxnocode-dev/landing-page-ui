import React from 'react'
import Styles from './styles'
import images from '@/assets/images'

const LPFooter: React.FC = () => {
    const columns = [
        {
            title: `Mapa do site`,
            items: [
                { title: `Topo do site`, action: () => {} },
                { title: `Serviços`, action: () => {} },
                { title: `Diferenciais`, action: () => {} },
                { title: `Cases`, action: () => {} },
                { title: `FAQs`, action: () => {} },
                { title: `Carreira`, action: () => {} }
            ]
        },
        {
            title: `Institucional`,
            items: [
                { title: `Sobre nós`, action: () => {} },
                { title: `Carreira`, action: () => {} },
                { title: `Novidades`, action: () => {} },
                { title: `Contato`, action: () => {} }
            ]
        },
        {
            title: `Recursos`,
            items: [
                { title: `Blog`, action: () => {} },
                { title: `Newsletter`, action: () => {} },
                { title: `Eventos`, action: () => {} },
                { title: `FAQs`, action: () => {} }
            ]
        },
        {
            title: `Social`,
            items: [
                { title: `Instagram`, action: () => {} },
                { title: `LinkedIn`, action: () => {} },
                { title: `Behance`, action: () => {} }
            ]
        },
        {
            title: `Legal`,
            items: [
                { title: `Termos de uso`, action: () => {} },
                { title: `Privacidade`, action: () => {} },
                { title: `Cookies`, action: () => {} },
                { title: `Licenças`, action: () => {} }
            ]
        }
    ]

    const itemsContainerStyle: React.CSSProperties = {
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`
    }

    return (
        <>
            <Styles.Section>
                <Styles.Container>
                    <Styles.View>
                        <Styles.Image src={images.Logo} />
                        <Styles.Text>
                            Pessoas incríveis com processos e visão clara,
                            constroem produtos sensacionais!
                        </Styles.Text>
                    </Styles.View>

                    <Styles.ItemsContainer style={itemsContainerStyle}>
                        {columns.map((col, index) => (
                            <Styles.Item key={index}>
                                <Styles.Title className="mb-2">
                                    {col.title}
                                </Styles.Title>

                                {col.items.map((item, itemIndex) => (
                                    <Styles.TextBold
                                        key={itemIndex}
                                        onClick={item.action}
                                    >
                                        {item.title}
                                    </Styles.TextBold>
                                ))}
                            </Styles.Item>
                        ))}
                    </Styles.ItemsContainer>
                </Styles.Container>
            </Styles.Section>

            <Styles.Footer>
                <Styles.Text className="mr-auto">
                    ® 2023 uxnocode.com | CNPJ: 46.182.874/0001-82 - Todos os
                    direitos reservados.
                </Styles.Text>
            </Styles.Footer>
        </>
    )
}

export default LPFooter
