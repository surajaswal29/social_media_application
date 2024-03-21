import React from "react"
import { PostProps } from "../../../utility/types"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

const PollPost: React.FC<PostProps> = ({ data }) => {
  return (
    <div className="w-full mt-2">
      <p className="my-2">{data.question}</p>
      <RadioGroup className="text-sm">
        {data.options.map((option: string | number, index: number) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio size="small" />}
            label={option}
            className="w-fit"
          />
        ))}
      </RadioGroup>
    </div>
  )
}

export default PollPost
