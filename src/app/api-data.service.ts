import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class ApiDataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const auth = [
      { userId: 1, username: 'admin', password: 'admin', email: 'admin@admin.com' },
      { userId: 2, username: 'guest', password: 'guest', email: 'guest@guest.com' }
    ];

    const policies = [
      { polId: 0, num: 'PO0', amount:  100, userId: 1, description: 'Insurance policy number POO' },
      { polId: 1, num: 'PO1', amount: 1000, userId: 1, description: 'Insurance policy number PO1' },
      { polId: 2, num: 'PO2', amount: 2000, userId: 1, description: 'Insurance policy number PO2' },
      { polId: 3, num: 'PO3', amount: 3000, userId: 1, description: 'Insurance policy number PO3' },
      { polId: 4, num: 'PO4', amount: 4000, userId: 1, description: 'Insurance policy number PO4' },
      { polId: 5, num: 'PO5', amount: 5000, userId: 1, description: 'Insurance policy number PO5' },
      { polId: 6, num: 'PO6', amount: 6000, userId: 1, description: 'Insurance policy number PO6' },
      { polId: 7, num: 'PO7', amount: 7000, userId: 1, description: 'Insurance policy number PO7' },
      { polId: 8, num: 'PO8', amount: 8000, userId: 1, description: 'Insurance policy number PO8' },
      { polId: 9, num: 'PO9', amount: 9000, userId: 1, description: 'Insurance policy number PO9' },

      { polId: 10, num: 'P10', amount: 1100, userId: 2, description: 'Insurance policy number POO' },
      { polId: 22, num: 'P11', amount: 1200, userId: 2, description: 'Insurance policy number PO1' },
      { polId: 12, num: 'P12', amount: 2300, userId: 2, description: 'Insurance policy number PO2' },
      { polId: 13, num: 'P13', amount: 3400, userId: 2, description: 'Insurance policy number PO3' },
      { polId: 14, num: 'P14', amount: 4500, userId: 2, description: 'Insurance policy number PO4' },
      { polId: 15, num: 'P15', amount: 5600, userId: 2, description: 'Insurance policy number PO5' },
      { polId: 16, num: 'P16', amount: 6700, userId: 2, description: 'Insurance policy number PO6' },
      { polId: 17, num: 'P17', amount: 7800, userId: 2, description: 'Insurance policy number PO7' },
      { polId: 18, num: 'P18', amount: 8900, userId: 2, description: 'Insurance policy number PO8' },
      { polId: 19, num: 'P19', amount: 9100, userId: 2, description: 'Insurance policy number PO9' },

      { polId: 20, num: 'P20', amount: 9100, userId: 3, description: 'Insurance policy number POO' },
      { polId: 21, num: 'P21', amount: 1000, userId: 3, description: 'Insurance policy number PO1' },
      { polId: 22, num: 'P22', amount: 2000, userId: 3, description: 'Insurance policy number PO2' },
      { polId: 23, num: 'P23', amount: 3000, userId: 3, description: 'Insurance policy number PO3' },
      { polId: 24, num: 'P24', amount: 4000, userId: 3, description: 'Insurance policy number PO4' },
      { polId: 25, num: 'P25', amount: 5000, userId: 3, description: 'Insurance policy number PO5' },
      { polId: 26, num: 'P26', amount: 6000, userId: 3, description: 'Insurance policy number PO6' },
      { polId: 27, num: 'P27', amount: 7000, userId: 3, description: 'Insurance policy number PO7' },
      { polId: 28, num: 'P28', amount: 8000, userId: 3, description: 'Insurance policy number PO8' },
      { polId: 29, num: 'P29', amount: 9000, userId: 3, description: 'Insurance policy number PO9' },
    ];

    const policiesDetails = [
      { detailsId: 1, polId: 1, amount: 100, clientName: 'admin1' },
      { detailsId: 2, polId: 2, amount: 100, clientName: 'admin1' },
      { detailsId: 3, polId: 2, amount: 900, clientName: 'admin2' },
      { detailsId: 4, polId: 4, amount: 2000, clientName: 'admin1' },
      { detailsId: 5, polId: 4, amount: 2000, clientName: 'admin3' },
      { detailsId: 6, polId: 5, amount: 5000, clientName: 'admin5' },
      { detailsId: 7, polId: 8, amount: 4000, clientName: 'admin1' },
      { detailsId: 8, polId: 8, amount: 500, clientName: 'admin7' },
      { detailsId: 9, polId: 8, amount: 5500, clientName: 'admin8' },

      { detailsId: 11, polId: 11, amount: 100, clientName: 'admin21' },
      { detailsId: 12, polId: 13, amount: 100, clientName: 'admin21' },
      { detailsId: 13, polId: 14, amount: 900, clientName: 'admin22' },
      { detailsId: 14, polId: 15, amount: 2000, clientName: 'admin21' },
      { detailsId: 15, polId: 16, amount: 2000, clientName: 'admin23' },
      { detailsId: 16, polId: 17, amount: 5000, clientName: 'admin25' },
      { detailsId: 17, polId: 18, amount: 4000, clientName: 'admin21' },
      { detailsId: 18, polId: 19, amount: 500, clientName: 'admin27' },

      { detailsId: 21, polId: 11, amount: 100, clientName: 'admin31' },
      { detailsId: 22, polId: 13, amount: 100, clientName: 'admin31' },
      { detailsId: 23, polId: 14, amount: 900, clientName: 'admin32' },
      { detailsId: 24, polId: 15, amount: 2000, clientName: 'admin31' },
      { detailsId: 25, polId: 16, amount: 2000, clientName: 'admin33' },
      { detailsId: 26, polId: 17, amount: 5000, clientName: 'admin35' },
      { detailsId: 27, polId: 18, amount: 4000, clientName: 'admin31' },
      { detailsId: 28, polId: 19, amount: 500, clientName: 'admin37' },
    ]

    return { auth, policies, policiesDetails };

  }
}

// Add to Description
// 1. add to each request the Autorization tokenName
// 2. edit page and url params - modifie the records for specific user.
