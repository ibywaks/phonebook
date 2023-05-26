export const myPhoneBook = {
    contacts: [
        {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane.d@mymail.com",
            phoneNumber: "213-999-0876",
            socialPlatForms: [
                {
                    platform: "WHATSAPP",
                    profile: "2139990876",
                    profileUrl: "https://api.whatsapp.com/+12139990876"
                }
            ],
            emergencyContact: {
                relationship: "FRIEND",
            },
            isBlocked: false,
            isFavorite: true,
            createdAt: "2021-03-04",
            updatedAt: "2023-10-10"
        },
        {
            firstName: "Hannah",
            lastName: "Buree",
            email: "hburee@nomail.com",
            phoneNumber: "390-123-7654",
            socialPlatForms: [
                {
                    platform: "INSTAGRAM",
                    profile: "h_buree",
                    profileUrl: null
                }
            ],
            isBlocked: false,
            isFavorite: false,
            createdAt: "2011-02-09",
            updatedAt: "2023-10-10"
        }
    ]
}