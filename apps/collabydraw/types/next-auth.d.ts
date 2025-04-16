import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name?: string;
        }
        accessToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
        accessToken: string;
    }
}