import React from 'react'
import Styles from './styles'
import { CASES_DATA } from '@/landing-page/data/cases.data'
import LPSectionTitle from '@/landing-page/components/section-title'
import ContentPaginator from '@/components/common/content-paginator'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPTestimony: React.FC = () => {
    const data = CASES_DATA.filter(({ testimony }) => !!testimony)

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.testimony}>
            <LPSectionTitle title="Depoimentos" />

            <ContentPaginator itemsPerPage={4} contentClassName="mt-8">
                {data.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Text>{item.testimony}</Styles.Text>

                        <Styles.Footer>
                            <Styles.AuthorContainer>
                                <Styles.AuthorImage src={item.authorImage} />

                                <Styles.View>
                                    <Styles.AuthorName>
                                        {item.authorName}
                                    </Styles.AuthorName>
                                    <Styles.AuthorRole>
                                        {item.authorRole}
                                    </Styles.AuthorRole>
                                </Styles.View>
                            </Styles.AuthorContainer>

                            <Styles.BoldText>
                                "{item.testimonyLabel}"
                            </Styles.BoldText>
                        </Styles.Footer>
                    </Styles.Card>
                ))}
            </ContentPaginator>
        </Styles.Container>
    )
}

export default LPTestimony
