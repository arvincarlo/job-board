export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center text-lg font-semibold">
            {children}
        </div>
    )
}
