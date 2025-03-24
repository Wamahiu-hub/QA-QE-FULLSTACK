import { NextFunction, Response } from "express";
import { RoleRequest } from "@app/utils/types/userRole";
import asyncHandler from "../asyncHandler";

/**
 * Role Guard Middleware
 * Restricts access to routes based on user roles.
 * @param allowedRoles - Array of roles allowed to access the route.
 */
const roleGuard = (allowedRoles: string[]) => {
  return asyncHandler<void, RoleRequest>(async (req: RoleRequest, res: Response, next: NextFunction) => {
    // Check if user is authenticated and has a role
    if (!req.user || !allowedRoles.includes(req.user.role_name)) {
      res.status(403).json({ message: "Acced denied 😅😅 only admins can do this 🫵" });
      return;
    }

    // If user has the required role, proceed to the next middleware/route handler
    next();
  });
};

// Predefined role guards for common use cases
const adminGuard = roleGuard(["Admin"]);
const librarianGuard = roleGuard(["Librarian"]);
const borrowerGuard = roleGuard(["Borrower"]);
const adminLibrarianGuard = roleGuard(["Admin", "Librarian"]);
const allUsersGuard = roleGuard(["Admin", "Librarian", "Borrower"]);

export { adminGuard, librarianGuard, borrowerGuard, adminLibrarianGuard, allUsersGuard };