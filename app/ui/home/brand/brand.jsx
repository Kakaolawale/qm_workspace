import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
       className="pl-4 h-6 w-auto"
       src="/quickmedplatform.png"
       alt="QuickMed Logo"
        {...props}
        width={200}
        height={170}
        priority
    />
)
export default Brand