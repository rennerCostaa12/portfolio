interface InformationsProfileProps {
    nameInformation: string;
    linkInformation?: string;
    logo: any;
}

export default function InformationsProfile({ nameInformation, logo, linkInformation, }: InformationsProfileProps) {
    return (
        <li>
            {logo}
            <a href={linkInformation}>
                {nameInformation}
            </a>
        </li>
    )
}