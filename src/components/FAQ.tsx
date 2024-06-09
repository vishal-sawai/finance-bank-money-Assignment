import { FC } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    isHighlighted?: boolean;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, isHighlighted = false }) => (
    <div className={`w-96 grow p-5 lg:p-12 rounded-xl my-3 ${isHighlighted ? 'text-white bg-red-500' : ''}`}>
        <h2 className="font-bold text-2xl capitalize">{question}</h2>
        <p className={`font-semibold text-lg mt-1 capitalize ${isHighlighted ? '' : 'text-gray-500'}`}>{answer}</p>
    </div>
);

const FAQ = () => {
    const faqData = [
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: true,
        },
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: false,
        },
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: false,
        },
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: true,
        },
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: true,
        },
        {
            question: 'the best financial accounting app ever!',
            answer: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
            isHighlighted: false,
        },
    ];

    return (
        <>
            <div className="mx-8 lg:mx-44 p-5">
                {/* Title */}
                <div className="my-3">
                    <h1 className="text-start font-semibold text-xl tracking-widest text-red-500">FAQ</h1>
                    <h1 className="text-start font-bold text-5xl capitalize">Frequently Asked <br /> Questions</h1>
                </div>

                {/* questions and answer */}
                <div className="flex flex-wrap mt-10">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ;