import Product from "@/components/Product";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#090915] items-center justify-between p-24">

            <Product
                gamename="Название игры"
                imagelink="ссылка на изображение"
                profilelink="ссылка на профиль Steam"
                unique_code="уникальный код"
                botnick="никнейм бота"
            />
        </main>
    );
}
