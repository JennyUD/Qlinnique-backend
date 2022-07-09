import {Module} from '@nestjs/common'
import { QlinniqueControllers } from 'src/controllers/controllers'
import { QlinniqueServices } from 'src/services/services'

@Module({
    controllers:[QlinniqueControllers]
    ,providers:[QlinniqueServices]
})
export class QlinniqueModule{}