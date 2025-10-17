import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/card";
import { Button } from "../shadcn/button";
import { cn } from "../../lib/utils";

export interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

const UserCard = React.forwardRef<HTMLDivElement, UserCardProps>(
  ({ name, email, avatar, role, onEdit, onDelete, className }, ref) => {
    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base truncate">{name}</CardTitle>
              {role && (
                <CardDescription className="text-xs text-muted-foreground">
                  {role}
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground mb-4 truncate">{email}</p>
          <div className="flex space-x-2">
            {onEdit && (
              <Button
                variant="outline"
                size="sm"
                onClick={onEdit}
                className="flex-1"
              >
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="destructive"
                size="sm"
                onClick={onDelete}
                className="flex-1"
              >
                Delete
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

UserCard.displayName = "UserCard";

export { UserCard };
