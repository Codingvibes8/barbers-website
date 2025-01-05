import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ServicesSkeleton() {
    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <Skeleton className="h-10 w-64 mx-auto mb-8" />
                <div className="flex justify-between items-center mb-6">
                    <Skeleton className="h-10 w-[180px]" />
                    <Skeleton className="h-10 w-[200px]" />
                    <Skeleton className="h-10 w-[180px]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Card key={i} className="flex flex-col">
                            <CardHeader>
                                <Skeleton className="h-[200px] w-full rounded-t-lg" />
                                <Skeleton className="h-6 w-3/4 mt-2" />
                                <Skeleton className="h-4 w-full mt-2" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Skeleton className="h-6 w-1/4 mt-2" />
                                <Skeleton className="h-4 w-1/3 mt-2" />
                            </CardContent>
                            <CardFooter>
                                <Skeleton className="h-10 w-full" />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

