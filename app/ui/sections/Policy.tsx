interface PolicyProps {
    title: string;
}

const Policy = ({ title }: PolicyProps) => {
    return (
        <>
        <h2>{title}</h2>
        </>
    )
};

export default Policy;