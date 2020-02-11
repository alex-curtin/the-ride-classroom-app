/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper. 
 * @param {String} val - Value of the data-test attribute to find.
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const studentsProp = [
  {
    id: "3b0d7462-8ba1-4a5c-8a64-7721f7a9947c",
    bio: {
      givenName: "Aisling",
      familyName: "Worthington",
      nickName: "Aisey",
      email: "aisey@email.me",
      age: 15,
      grade: 10
    },
    history: {
      absences: 5,
      gpa: 3.7
    },
    grades: {
      project1: 92,
      project2: 88,
      project3: 91,
      project4: "n/a"
    }
  },
  {
    id: "c5e6ba4a-2bfc-45b8-ad2d-fdab394e8feb",
    bio: {
      givenName: "Charlie",
      familyName: "Guzman",
      nickName: "Charlie",
      email: "charlie@email.me",
      age: 17,
      grade: 11
    },
    history: {
      absences: 8,
      gpa: 4
    },
    grades: {
      project1: 100,
      project2: 100,
      project3: 100,
      project4: "n/a"
    }
  },
  {
    id: "a9ca95d8-47ba-4457-974e-679247d79a70",
    bio: {
      givenName: "Leslie",
      familyName: "Mccarthy",
      nickName: "Les",
      email: "leslie@email.me",
      age: 17,
      grade: 11
    },
    history: {
      absences: 13,
      gpa: 2.6
    },
    grades: {
      project1: 91,
      project2: 73,
      project3: 55,
      project4: "n/a"
    }
  },
];

export const datesProp = [
  {
    date: 1577854800000,
    students: [
      {
        entryId: "3c03b1f4-9d31-45b1-8121-63e9cb837fae",
        studentId: "c5e6ba4a-2bfc-45b8-ad2d-fdab394e8feb",
        absent: false,
        tardy: false,
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "e2cd3e2b-a020-4b22-85b8-3ef195fe6e90"
      },
      {
        entryId: "66aefbca-bd0c-44fc-926f-73ed035d8a24",
        studentId: "b41c21a8-5487-4063-a976-b799d485229d",
        absent: false,
        tardy: true,
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "eeb216da-fe27-4196-8013-ef79c404300a"
      },
      {
        entryId: "cd55e8c7-bd17-4213-913c-657457246a36",
        studentId: "3b0d7462-8ba1-4a5c-8a64-7721f7a9947c",
        absent: false,
        tardy: false,
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "29b510df-bafc-43d9-b3d2-c0b089b51e9a"
      },
      {
        entryId: "fbe44e46-d53a-4a02-9cd4-b260d68596ce",
        studentId: "91abf0a1-717c-4123-bdcb-d5215a6ac570",
        absent: false,
        tardy: false,
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "041f9dce-7b1c-4c65-bc06-422c74a358c3"
      },
      {
        entryId: "27dfb237-67b1-4a62-bbb5-766258310afe",
        studentId: "a9ca95d8-47ba-4457-974e-679247d79a70",
        absent: true,
        tardy: false,
        roomId: "n/a",
        positionId: "n/a"
      }
    ],
    desks: [
      {
        entryId: "1db69bea-96bd-4821-97be-8f09e04b1bc2",
        deskId: "a25bd008-5f78-4ae6-b2a7-6b453f2e44f6",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "66835c79-3eb0-4abc-b2fc-5ef2e72f13bb"
      },
      {
        entryId: "9911c907-dbfa-4a24-9135-9bb0bafbb3b8",
        deskId: "68557a9c-96cb-4a00-81f9-41318549ab2a",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "29b510df-bafc-43d9-b3d2-c0b089b51e9a"
      },
      {
        entryId: "2b0434f6-227f-450c-b183-b1bf10246f98",
        deskId: "a1a33b92-8b46-4e80-b8a1-5e45e8d7aa2e",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "041f9dce-7b1c-4c65-bc06-422c74a358c3"
      },
      {
        entryId: "0351bf24-585f-4004-b293-adde4712891d",
        deskId: "14f34532-ba50-42a5-99fd-162c4c79fe06",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "3670f011-ddfb-43c0-86a9-679cda2b79ae"
      },
      {
        entryId: "5965a814-d9e0-4d61-b952-9745c544ce87",
        deskId: "5316cf62-3218-4a97-8c2e-8e80c9f62438",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "e2cd3e2b-a020-4b22-85b8-3ef195fe6e90"
      },
      {
        entryId: "98e4fd95-6378-42af-8c6a-93e7836f70ce",
        deskId: "7fd34fbf-fee9-4754-8ac9-15183394c705",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "7a758d63-df4c-4b86-b93a-99a9c2ad68e0"
      },
      {
        entryId: "d4aaa35b-e0e8-4298-9f98-f3571449b7a8",
        deskId: "de242095-154f-44a8-8e1f-98e391838d94",
        status: "In Use",
        roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
        positionId: "eeb216da-fe27-4196-8013-ef79c404300a"
      },
      {
        entryId: "75c02b2b-8e90-4276-9f31-7f6398abda55",
        deskId: "d9eef97d-d043-4717-9889-dca80882767e",
        status: "Standby",
        roomId: "868e2942-eecc-4e99-b1f2-b21eca0e6f7f",
        positionId: "n/a"
      },
      {
        entryId: "fc1799b9-fbb7-432c-939a-4294138649ad",
        deskId: "3a950cd7-f347-4c17-8409-3fcc5459b13c",
        status: "Standby",
        roomId: "868e2942-eecc-4e99-b1f2-b21eca0e6f7f",
        positionId: "n/a"
      },
      {
        entryId: "da3e65bd-7aee-4986-8b67-299f70b7514a",
        deskId: "e8c75fe7-89ec-4178-a6e8-bddcb4afac96",
        status: "Repaired",
        roomId: "868e2942-eecc-4e99-b1f2-b21eca0e6f7f",
        positionId: "n/a"
      }
    ]
  }
];

export const roomsProp = [
  {
    roomId: "6490847d-a3db-44ba-90eb-8832bf938e69",
    positions: [
      "66835c79-3eb0-4abc-b2fc-5ef2e72f13bb",
      "29b510df-bafc-43d9-b3d2-c0b089b51e9a",
      "7a758d63-df4c-4b86-b93a-99a9c2ad68e0",
      "eeb216da-fe27-4196-8013-ef79c404300a",
      "e64374f6-da46-42ef-a30e-a1ddfe147938",
      "3670f011-ddfb-43c0-86a9-679cda2b79ae",
      "e2cd3e2b-a020-4b22-85b8-3ef195fe6e90",
      "041f9dce-7b1c-4c65-bc06-422c74a358c3"
    ]
  }
];

export const desksProp = [
  {
    id: "3a950cd7-f347-4c17-8409-3fcc5459b13c",
    purchased: 1363492800000,
    repairs: [
      {
        repairId: "df99b3dc-2a03-4187-b281-4021d4c18cb7",
        breakDate: 1421989200000,
        fixDate: 1423544400000,
        issueString: "Front left leg balance cup missing",
        fixString: "Replaced balance cup"
      },
      {
        repairId: "0981dd5b-c9a2-4a62-aa12-d2621c7c2308",
        breakDate: 1504756800000,
        fixDate: 1504929600000,
        issueString: "Vulgarity carved into desktop",
        fixString: "Puddy, painted, sanded"
      },
      {
        repairId: "3a1d47da-7bd3-45e0-9036-9500af9e6523",
        breakDate: 1539403200000,
        fixDate: 1539748800000,
        issueString: "Vulgarity carved into desktop",
        fixString: "Puddy, painted, sanded"
      }
    ]
  },
  {
    id: "7fd34fbf-fee9-4754-8ac9-15183394c705",
    purchased: 1363492800000,
    repairs: []
  }
];
