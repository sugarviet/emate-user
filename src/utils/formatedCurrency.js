import Image from "next/image";

export const formattedCurrency = (value) => {
    return "₫" + new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value).replace("₫", "");
}

export const formattedCoin = (value, size = 32) => {
    const newValue = Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value).replace("₫", "");

    return <span className="flex items-center">{newValue} <Image alt="emate-coin-image" width={size} height={size} src={'/emate-coin.svg'} /></span>
}