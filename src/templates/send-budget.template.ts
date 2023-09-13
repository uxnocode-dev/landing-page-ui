import { IContactUserData } from '@/interfaces/contact.interface'
import { IBudgetSectionAnswer } from '@/landing-page/components/budget/budget-section'

export const getBudgetTemplate = (user: IContactUserData) => {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Propsta comercial</title>
  </head>
  <body
    style="
      padding: 1.4rem;
      font-size: 1.2rem;
      border-radius: 22px;
      background: #161d26;
      color: rgba(255, 255, 255, 0.5) !important;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    "
  >
    <table width="100%">
      <tr>
        <td align="center">
          <img
            src="https://i.ibb.co/DMPvgr9/mascot.png"
            style="width: 4rem"
            alt="uxnocode"
          />
        </td>
      </tr>

      <tr>
        <td align="center">
          <h1 style="color: #004bff; font-weight: bold">Proposta comercial</h1>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="margin-bottom: 2rem">
            <p style="margin-bottom: 0rem">${user.name}</p>
            <p style="margin-bottom: 0rem">${user.telephone}</p>
            <p style="margin-top: 0rem">${user.email}</p>
            <p style="margin-top: 0rem">${user.resume}</p>
            <p style="margin-top: 0rem">${user.value}</p>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>

    `
}
