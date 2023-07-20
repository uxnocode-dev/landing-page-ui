import { ICareerForm } from '@/interfaces/career.interface'

export const getCareerTemplate = (data: ICareerForm) => {
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
          <h1 style="color: #004bff; font-weight: bold">Carreira</h1>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div style="margin-bottom: 2rem">
            <p style="margin-bottom: 0rem">${data.name}</p>
            <p style="margin-bottom: 0rem">${data.role}</p>
            <p style="margin-bottom: 0rem">${data.email}</p>
            <p style="margin-top: 0rem">${data.portfolioURL}</p>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>

    `
}
