import { ContentTag } from "../styles/TagsTechStyle"

interface TagsTechProps{
    titleTag: string;
}

export default function TagsTech({ titleTag }: TagsTechProps){
    return(
        <ContentTag>
            <span>{titleTag}</span>
        </ContentTag>
    )
}