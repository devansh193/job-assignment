"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const CardWrapper = ({ children, title }: CardWrapperProps) => {
  return (
    <div>
      <Card className="max-w-screen shadow-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className={`grid grid-cols-1 gap-4`}>
          {children}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
