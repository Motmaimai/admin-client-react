import React from 'react'
import { Card1 } from '../../../../../_metronic/partials/content/cards/Card1'
import { Card2 } from '../../../../../_metronic/partials/content/cards/Card2'
import { Card3 } from '../../../../../_metronic/partials/content/cards/Card3'
import { Card4 } from '../../../../../_metronic/partials/content/cards/Card4'
import { Card5 } from '../../../../../_metronic/partials/content/cards/Card5'

export function ViewDetail() {
  return (
    <div className='card'>
        {/* begin::Detail */}
        <Card1
            avatar='/media/avatars/300-6.jpg'
            name='Emma Smith'
            job='Art Director'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        <Card2
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
          />
        <Card3
            avatar='/media/avatars/300-6.jpg'
            name='Emma Smith'
            job='Art Director'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        <Card4
            icon='/media/svg/files/folder-document.svg'
            title='Finance'
            description='7 files'
          />
        <Card5
            image='/media/svg/brand-logos/twitch.svg'
            title='Twitch Posts'
            description='$500.00'
            status='down'
            statusValue={40.5}
            statusDesc='more impressions'
            progress={0.5}
            progressType='MRR'
          />
        {/* end::Detail */}
    </div>
  )
}
