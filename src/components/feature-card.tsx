import type * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	href?: string;
	linkText?: string;
	className?: string;
}

export function FeatureCard({
	title,
	description,
	icon,
	href,
	linkText,
	className,
}: FeatureCardProps) {
	const isExternal = href?.startsWith("http");

	return (
		<Card className={cn("w-full transition hover:border-foreground/20 hover:shadow-xs", className)}>
			<CardContent className="flex flex-col gap-3">
				<div className="bg-primary rounded-md [&_svg]:text-primary-foreground flex size-11 items-center justify-center [&_svg]:size-5">
					{icon}
				</div>
				<span className="text-foreground block text-sm leading-tight font-medium">
					{title}
				</span>
				<p className="text-muted-foreground text-xs leading-relaxed">
					{description}
				</p>
				{linkText && href && (
					<a
						href={href}
						target={isExternal ? "_blank" : undefined}
						rel={isExternal ? "noopener noreferrer" : undefined}
						className="text-primary inline-flex items-center gap-1 text-xs font-medium hover:underline"
					>
						{linkText}
						<ArrowUpRight aria-hidden="true" className="size-3 shrink-0" />
					</a>
				)}
			</CardContent>
		</Card>
	);
}
