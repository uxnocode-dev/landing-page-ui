import React from 'react'
import Styles from './styles'
import { CASES_DATA } from '@/landing-page/data/cases.data'
import LPSectionTitle from '@/landing-page/components/section-title'
import ContentPaginator from '@/components/common/content-paginator'

const LPTestimony: React.FC = () => {
    const data = CASES_DATA.filter(({ testimony }) => !!testimony)

    return (
        <Styles.Container>
            <LPSectionTitle title="Depoimentos" />

            <ContentPaginator itemsPerPage={4}>
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
