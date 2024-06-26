import Product from "@/components/Product";
import Icon from "@/components/Icon";

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col bg-[#090915] items-center justify-center p-24">
            <Icon/>
            <Product/>
        </main>
    );
}
