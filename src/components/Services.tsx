interface ServicesProps {
    titleService: string;
    yearServiceInit: number;
    yearServiceFinal: number | string;
    serviceFunction: string
}

export default function Services({ titleService, yearServiceInit, yearServiceFinal, serviceFunction }: ServicesProps) {
    return (
        <li>
            <span>{titleService}</span>
            <span>{yearServiceInit} - {yearServiceFinal}</span>
            <span>{serviceFunction}</span>
        </li>
    )
}