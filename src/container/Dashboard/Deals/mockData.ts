interface I_deals {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    partner?: string;
    location?: string;
    status?: "Active" | "Inactive" | "Awaiting approval" | "Deactivated";
};

export const dealsData:I_deals[] = [];