interface I_transactions {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    partner?: string;
    location?: string;
    status?: "Active" | "Inactive" | "Awaiting approval" | "Deactivated";
};

export const transactionsData:I_transactions[] = [];