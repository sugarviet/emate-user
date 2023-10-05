import Image from "next/image";

export const formattedCurrency = (value) => {
    return "₫" + new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value).replace("₫", "");
}

export const formattedCoin = (value) => {
    return <span className="flex items-center"><Image width={32} height={32} src={'/emate-coin.svg'}/> x {value}</span>
}