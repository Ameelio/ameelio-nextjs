export interface TShowcaseItem {
    label: string;
    asset?: JSX.Element;
    link?: string;
}
export interface TMetricItem {
    metric: string;
    label: string;
}

export interface TTestimonialItem {
    imageSrc: StaticImageData | string;
    quote: string;
    author: string;
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