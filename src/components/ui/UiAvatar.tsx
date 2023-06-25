import Image from "next/image";

interface Props {
    avatar: any;
}
export default function UiAvatar({ avatar }: Props) {
    return <Image src={avatar} alt='truckdispatch image' />
}