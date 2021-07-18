import React from 'react'
import { TTeamMember } from 'types'
import Image from 'next/image';

interface Props extends TTeamMember {
    company?: string 
}

const TeamMemberItem = ({imageSrc, name, title, company }: Props) => {
    return (
        <div className="flex flex-col items-center p-4">
            <Image src={imageSrc} width={80} height={80} alt={`${name} photo`}/>
            <span className="text-bold text-center">{name}</span>
            <span className="text-gray-500 text-center">{title}</span>
            <span className="text-gray-500 text-center">{company}</span>
        </div>
    )
}

export default TeamMemberItem
