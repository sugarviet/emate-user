import Image from "next/image";

export const formattedCurrency = (value) => {
    return "₫" + new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value).replace("₫", "");
}

export const formattedCoin = (value) => {
    const newValue = Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value).replace("₫", "");

    return <span className="flex items-center">{newValue} <Image alt="emate-coin-image" width={32} height={32} src={'/emate-coin.svg'} /></span>
}