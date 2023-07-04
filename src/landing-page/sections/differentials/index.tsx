import React from 'react'
import Styles from './styles'
import LPSectionTitle from '@/landing-page/components/section-title'
import Icons from '@/assets/icons'
import images from '@/assets/images'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPDifferentials: React.FC = () => {
    const items = [
        'Interesse de verdade em entender o seu negócio e não somente desenvolver',
        'Equipe de ux focada em pesquisas para descobrir e organizar as informações',
        'Uma equipe multidisciplinar dedicada em cada projeto',
        'Organização e acompanhamento do projeto pelo ecossistema exclusivo uxnocode',
        'Comunicação clara e simples com nossos clientes',
        'Desenvolvimento no-code, low-code e code'
    ]

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.differentials}>
            <LPSectionTitle title="Diferenciais de mercado" />
            <Styles.Text className="text-center mt-4 mb-12 sm:mb-4">
                Veja alguns dos motivos de você nos escolher para construir seu
                sistema, site ou aplicativo.
            </Styles.Text>

            <Styles.Icon>
                <Icons.ScrollXIndicator />
            </Styles.Icon>

            <Styles.WebContent>
                <Styles.Card className="sm:!hidden">
                    <Styles.Text></Styles.Text>

                    <Styles.Item>
                        <Styles.Image src={images.Logo} className="!block" />
                    </Styles.Item>

                    <Styles.Item>Outras agências</Styles.Item>
                </Styles.Card>

                {items.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Text>{item}</Styles.Text>

                        <Styles.Item>
                            <Styles.Image src={images.Logo} />
                            <Icons.Check />
                        </Styles.Item>

                        <Styles.Item>
                            <Styles.Text>Outras agências</Styles.Text>
                            <Icons.Uncheck />
                        </Styles.Item>
                    </Styles.Card>
                ))}
            </Styles.WebContent>

            <Styles.MobileContent></Styles.MobileContent>
        </Styles.Container>
    )
}

export default LPDifferentials
