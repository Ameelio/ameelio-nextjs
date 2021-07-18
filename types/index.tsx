export interface TShowcaseItem {
    label: string;
    asset?: JSX.Element;
    link?: string;
}
export interface TMetricItem {
    metric: string;
    label: string;
}

export interface TReviewItem {
    imageSrc: string;
    quote: string;
    author: string;
}


export interface TTestimonialItem extends TReviewItem {
    occupation: string;
}

export interface TStepByStepItem {
    index: number;
    title: string;
    desc: string;
}

export interface TValuePropItem {
    icon: JSX.Element;
    title: string;
    body: string;
    cta?: { text: string, link: string}
}

export interface TCallToAction {
    link: string;
    text: string;
}

export interface TTeamMember {
    imageSrc: string;
    name: string;
    title: string; 
}

export interface TBoardMember extends TTeamMember {
    company: string;
}