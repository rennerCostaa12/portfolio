import { CardContent, TitleCard, DescriptionCard, ContentPrimaryLanguage } from '../styles/CardProjectStyle'
import { FolderSimple } from 'phosphor-react'
interface CardProjectProps {
    description: string;
    name: string;
    linkRepo: string;
    primaryLanguage: string;
}

export default function CardProject(
    {
        description,
        name,
        linkRepo,
        primaryLanguage,
    }: CardProjectProps) {

    let colorLanguage;

    if (primaryLanguage.toUpperCase() == 'JAVASCRIPT') {
        colorLanguage = '#f1e05a';
    } else if (primaryLanguage.toUpperCase() == 'CSS') {
        colorLanguage = '#563d7c';
    } else if (primaryLanguage.toUpperCase() == 'TYPESCRIPT') {
        colorLanguage = '#3178c6';
    } else if (primaryLanguage.toUpperCase() == 'PHP') {
        colorLanguage = '#7c41d4';
    } else if (primaryLanguage.toUpperCase() == 'PYTHON') {
        colorLanguage = '#3572A5';
    } else {
        colorLanguage = '#e34c26';
    }

    return (
        <CardContent>
            <div>
                <FolderSimple color='#837E9F' size={20} />
                <a href={linkRepo}>
                    <TitleCard>{name}</TitleCard>
                </a>
            </div>
            <DescriptionCard>{description ? description : 'Sem descrição'}</DescriptionCard>

            <ContentPrimaryLanguage>
                <span style={{
                    color: `${colorLanguage}`
                }}>
                    ●
                </span>
                {primaryLanguage}
            </ContentPrimaryLanguage>
        </CardContent>
    )
}